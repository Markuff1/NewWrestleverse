import "./ChampionshipStyle.css";
import "../Home.css";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import Header from "../Header";
import Footer from "../Footer";

// Utility to calculate weeks between two dates (never negative)
const calculateWeeksBetween = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate.getTime() - startDate.getTime();
  return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7)));
};

type ChampionshipPageProps = {
  collectionId: string;
  bannerSrc: string;
};

const ChampionshipPage: React.FC<ChampionshipPageProps> = ({
  collectionId,
  bannerSrc,
}) => {
  const [titleHolders, setTitleHolders] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [event, setEvent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState({
    name: "",
    date: "",
    event: "",
  });

  const [longestReign, setLongestReign] = useState<any | null>(null);
  const [shortestReign, setShortestReign] = useState<any | null>(null);
  const [mostReigns, setMostReigns] = useState<{
    names: string[];
    count: number;
  } | null>(null);

  const fetchData = async () => {
    const querySnapshot = await getDocs(
      collection(db, "Wrestleverse", "ChampionshipData", collectionId)
    );

    let records = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as any[];

    // sort newest first
    records = records.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // calculate reign lengths
    for (let i = 0; i < records.length; i++) {
      if (i === 0) {
        records[i].days = calculateWeeksBetween(
          records[i].date,
          new Date().toISOString().split("T")[0]
        );
      } else {
        records[i].days = calculateWeeksBetween(
          records[i].date,
          records[i - 1].date
        );
      }
    }

    setTitleHolders(records);
    calculateStats(records);
  };

  const calculateStats = (records: any[]) => {
    if (records.length === 0) {
      setLongestReign(null);
      setShortestReign(null);
      setMostReigns(null);
      return;
    }

    const valid = records.filter(
      (r) => r.name && r.name.toLowerCase() !== "vacant"
    );

    // LONGEST REIGN
    const longest = valid.reduce((prev, curr) =>
      curr.days > prev.days ? curr : prev
    );
    setLongestReign(longest);

    // SHORTEST REIGN (exclude current champ)
    const pastReigns = records.slice(1).filter(
      (r) => r.name && r.name.toLowerCase() !== "vacant"
    );

    if (pastReigns.length > 0) {
      const shortest = pastReigns.reduce((prev, curr) =>
        curr.days < prev.days ? curr : prev
      );
      setShortestReign(shortest);
    } else {
      setShortestReign(null);
    }

    // MOST REIGNS (FIXED - handles duplicates properly)
    const countMap: Record<string, number> = {};

    records.forEach((r) => {
      if (!r.name) return;

      const key = r.name.trim().toLowerCase();
      countMap[key] = (countMap[key] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(countMap));

    const topNames = Object.entries(countMap)
      .filter(([_, count]) => count === maxCount)
      .map(([name]) => {
        const original = records.find(
          (r) => r.name.trim().toLowerCase() === name
        );
        return original?.name || name;
      });

    setMostReigns({
      names: topNames,
      count: maxCount,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addRecord = async () => {
    if (name && date && event) {
      const newRecord = { name, date, event, days: 0 };

      const docRef = await addDoc(
        collection(db, "Wrestleverse", "ChampionshipData", collectionId),
        newRecord
      );

      const newData = [{ id: docRef.id, ...newRecord }, ...titleHolders];

      setTitleHolders(newData);
      calculateStats(newData);

      setName("");
      setDate("");
      setEvent("");
      fetchData();
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(
      doc(db, "Wrestleverse", "ChampionshipData", collectionId, id)
    );

    const updated = titleHolders.filter((r) => r.id !== id);
    setTitleHolders(updated);
    calculateStats(updated);
  };

  const startEdit = (record: any) => {
    setEditingId(record.id);
    setEditData({
      name: record.name,
      date: record.date,
      event: record.event,
    });
  };

  const saveEdit = async (id: string) => {
    const ref = doc(db, "Wrestleverse", "ChampionshipData", collectionId, id);
    await updateDoc(ref, editData);
    setEditingId(null);
    fetchData();
  };

  const currentChampion = titleHolders[0];

  return (
    <div>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">
          <img className="TitleHeaderImage" src={bannerSrc} alt="Header" />

          {currentChampion && (
            <div className="CurrentChampionCard">
              <h2 className="ccTitle"> - Current Champion - </h2>
              <h3 className="ccName">{currentChampion.name}</h3>
              <p className="ccDate">
                Since{" "}
                {new Date(currentChampion.date).toLocaleDateString("en-GB")} (
                {currentChampion.event})
              </p>
            </div>
          )}

          <div className="StatsGrid">
            {longestReign && (
              <div className="StatBox">
                <strong> - Longest Reign - </strong>
                <span>
                  {longestReign.name} – {longestReign.days} weeks
                </span>
              </div>
            )}

            {shortestReign && (
              <div className="StatBox">
                <strong> - Shortest Reign - </strong>
                <span>
                  {shortestReign.name} – {shortestReign.days} weeks
                </span>
              </div>
            )}

            {mostReigns && (
              <div className="StatBox">
                <strong> - Most Reigns - </strong>
                <span>
                  {mostReigns.names.join(", ")} – {mostReigns.count} times
                </span>
              </div>
            )}
          </div>

          <div className="InputContainerChamp">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />
            <button className="icon-btn" onClick={addRecord}>
              <img src="/Images/Icons/Add.png" alt="Add" />
            </button>
          </div>

          <table className="TitleHolderTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Length (Weeks)</th>
                <th>Date</th>
                <th>Event</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {titleHolders.map((holder) => (
                <tr key={holder.id}>
                  {editingId === holder.id ? (
                    <>
                      <td>
                        <input
                          value={editData.name}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              name: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>{holder.days}</td>
                      <td>
                        <input
                          type="date"
                          value={editData.date}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              date: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <input
                          value={editData.event}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              event: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <button onClick={() => saveEdit(holder.id)}>
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)}>
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{holder.name}</td>
                      <td>{holder.days}</td>
                      <td>
                        {holder.date &&
                          new Date(holder.date).toLocaleDateString("en-GB")}
                      </td>
                      <td>{holder.event}</td>
                      <td>
                        <button onClick={() => startEdit(holder)}>
                          Edit
                        </button>
                        <button onClick={() => deleteRecord(holder.id)}>
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChampionshipPage;
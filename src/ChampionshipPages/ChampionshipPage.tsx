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
  const [editData, setEditData] = useState<{
    name: string;
    date: string;
    event: string;
  }>({ name: "", date: "", event: "" });

  const [longestReign, setLongestReign] = useState<any | null>(null);
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
    })) as any;

    // sort newest first
    records = records.sort(
      (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // update reign lengths
    for (let i = 0; i < records.length; i++) {
      if (i === 0) {
        // Current champ: from win date until today
        records[i].days = calculateWeeksBetween(
          records[i].date,
          new Date().toISOString().split("T")[0]
        );
      } else {
        // Past champs: from win date until the next champ’s win date
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
      setMostReigns(null);
      return;
    }

    const longest = records.reduce((prev, curr) =>
      curr.days > prev.days ? curr : prev
    );
    setLongestReign(longest);

    const countMap: Record<string, number> = {};
    records.forEach((record) => {
      countMap[record.name] = (countMap[record.name] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(countMap));
    const topNames = Object.entries(countMap)
      .filter(([_, count]) => count === maxCount)
      .map(([name]) => name);

    setMostReigns({ names: topNames, count: maxCount });
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
      fetchData(); // refresh reign lengths
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(doc(db, "Wrestleverse", "ChampionshipData", collectionId, id));
    const updated = titleHolders.filter((record) => record.id !== id);
    setTitleHolders(updated);
    calculateStats(updated);
  };

  const startEdit = (record: any) => {
    setEditingId(record.id);
    setEditData({ name: record.name, date: record.date, event: record.event });
  };

  const saveEdit = async (id: string) => {
    const ref = doc(db, "Wrestleverse", "ChampionshipData", collectionId, id);
    await updateDoc(ref, editData);
    setEditingId(null);
    fetchData(); // refresh everything
  };

  const currentChampion = titleHolders[0];

  return (
    <div>
      <Header />
      <div className="ChampionshipBackground">
        <div className="ChampionshipContainer">
          <img
            className="TitleHeaderImage"
            src={bannerSrc}
            alt="Header Background"
          />

          {/* Current Champion */}
          {currentChampion && (
            <div className="CurrentChampionCard">
              <h2 className="ccTitle"> -- Current Champion -- </h2>
              <h3 className="ccName">{currentChampion.name}</h3>
              <p className="ccDate">
                Since {new Date(currentChampion.date).toLocaleDateString("en-GB")} (
                {currentChampion.event})
              </p>
            </div>
          )}

          <div className="StatsGrid">
            {longestReign &&
              (() => {
                const validLongest = Array.isArray(longestReign)
                  ? longestReign.find(
                      (r) => r.name.toLowerCase() !== "vacant"
                    )
                  : longestReign.name.toLowerCase() !== "vacant"
                  ? longestReign
                  : null;

                if (!validLongest) return null;

                return (
                  <div className="StatBox">
                    <strong> -- Longest Reign -- </strong>
                    <span>
                      {validLongest.name} – {validLongest.days} weeks
                    </span>
                  </div>
                );
              })()}

            {mostReigns && (
              <div className="StatBox">
                <strong> -- Most Reigns -- </strong>
                <span>
                  {mostReigns.names.filter((n) => n !== "Vacant").join(", ")} –{" "}
                  {mostReigns.count} times
                </span>
              </div>
            )}
          </div>

          <div className="InputContainer">
            <input
              type="text"
              placeholder="Name of Title Holder"
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
              placeholder="Event Won At"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />
            <button onClick={addRecord}>Add Record</button>
          </div>

          <table className="TitleHolderTable">
            <thead>
              <tr>
                <th>Name of Title Holder</th>
                <th>Length of Reign (Weeks)</th>
                <th>Date Won</th>
                <th>Event Won at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {titleHolders.map((holder) => {
                const formattedDate = holder.date
                  ? new Date(holder.date).toLocaleDateString("en-GB")
                  : "";

                return (
                  <tr
                    key={holder.id}
                    className={editingId === holder.id ? "edit-row" : ""}
                  >
                    {editingId === holder.id ? (
                      <>
                        <td>
                          <input
                            className="edit-input"
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
                            className="edit-input"
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
                            className="edit-input"
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
                          <button
                            className="edit-save-btn"
                            onClick={() => saveEdit(holder.id)}
                          >
                            Save
                          </button>
                          <button
                            className="edit-cancel-btn"
                            onClick={() => setEditingId(null)}
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{holder.name}</td>
                        <td>{holder.days}</td>
                        <td>{formattedDate}</td>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChampionshipPage;

import "./ChampionshipStyle.css";
import "./MITBStyle.css";
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

// Utility to calculate weeks between two dates
const calculateWeeksBetween = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate.getTime() - startDate.getTime();

  return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7)));
};

const MMITB: React.FC = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    dateWon: "",
    eventCashed: "",
    dateCashed: "",
    successful: "Yes",
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState({ ...form });

  const collectionId = "MMITB";

  const fetchData = async () => {
  const querySnapshot = await getDocs(
    collection(db, "Wrestleverse", "ChampionshipData", collectionId)
  );

  let records = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any;

  // Sort newest first (by dateWon, fallback to dateCashed)
  records = records.sort((a: any, b: any) => {
    const dateA = new Date(a.dateWon || a.dateCashed).getTime();
    const dateB = new Date(b.dateWon || b.dateCashed).getTime();
    return dateB - dateA;
  });

  // Calculate weeks held automatically
  records = records.map((record: any) => ({
    ...record,
    weeksHeld: calculateWeeksBetween(record.dateWon, record.dateCashed),
  }));

  setEntries(records);
};

  useEffect(() => {
    fetchData();
  }, []);

  const addRecord = async () => {
    if (
      form.name &&
      form.dateWon &&
      form.eventCashed &&
      form.dateCashed
    ) {
      const newRecord = { ...form };

      const docRef = await addDoc(
        collection(db, "Wrestleverse", "ChampionshipData", collectionId),
        newRecord
      );

      setEntries([{ id: docRef.id, ...newRecord }, ...entries]);

      setForm({
        name: "",
        dateWon: "",
        eventCashed: "",
        dateCashed: "",
        successful: "Yes",
      });
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(
      doc(db, "Wrestleverse", "ChampionshipData", collectionId, id)
    );

    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const startEdit = (entry: any) => {
    setEditingId(entry.id);
    setEditData({
      name: entry.name,
      dateWon: entry.dateWon,
      eventCashed: entry.eventCashed,
      dateCashed: entry.dateCashed,
      successful: entry.successful,
    });
  };

  const saveEdit = async (id: string) => {
    const ref = doc(
      db,
      "Wrestleverse",
      "ChampionshipData",
      collectionId,
      id
    );

    await updateDoc(ref, editData);

    setEditingId(null);
    fetchData();
  };

  return (
    <div>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">
          <img
            className="TitleHeaderImage"
            src="/Images/CBanners/MMITBBanner.png"
            alt="MITB Banner"
          />

          <div className="reignstitle">MITB Records</div>

          {/* Inputs */}
          <div className="InputContainerChamp">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="date"
              value={form.dateWon}
              onChange={(e) =>
                setForm({ ...form, dateWon: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Event Cashed In"
              value={form.eventCashed}
              onChange={(e) =>
                setForm({
                  ...form,
                  eventCashed: e.target.value,
                })
              }
            />

            <input
              type="date"
              value={form.dateCashed}
              onChange={(e) =>
                setForm({
                  ...form,
                  dateCashed: e.target.value,
                })
              }
            />

            <select
              value={form.successful}
              onChange={(e) =>
                setForm({
                  ...form,
                  successful: e.target.value,
                })
              }
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <button
              className="icon-btn"
              onClick={addRecord}
              aria-label="Add Record"
            >
              <img src="/Images/Icons/Add.png" alt="Add" />
            </button>
          </div>

          {/* Table */}
          <table className="TitleHolderTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Won</th>
                <th>Event Cashed In</th>
                <th>Date Cashed In</th>
                <th>Weeks Held</th>
                <th>Successful?</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {entries.map((entry) => {
                const weeksHeld = calculateWeeksBetween(
                  entry.dateWon,
                  entry.dateCashed
                );

                return (
                  <tr
                    key={entry.id}
                    className={
                      editingId === entry.id ? "edit-row" : ""
                    }
                  >
                    {editingId === entry.id ? (
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

                        <td>
                          <input
                            className="edit-input"
                            type="date"
                            value={editData.dateWon}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                dateWon: e.target.value,
                              })
                            }
                          />
                        </td>

                        <td>
                          <input
                            className="edit-input"
                            value={editData.eventCashed}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                eventCashed:
                                  e.target.value,
                              })
                            }
                          />
                        </td>

                        <td>
                          <input
                            className="edit-input"
                            type="date"
                            value={editData.dateCashed}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                dateCashed:
                                  e.target.value,
                              })
                            }
                          />
                        </td>

                        <td>
                          {calculateWeeksBetween(
                            editData.dateWon,
                            editData.dateCashed
                          )}
                        </td>

                        <td>
                          <select
                            value={editData.successful}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                successful:
                                  e.target.value,
                              })
                            }
                          >
                            <option value="Yes">
                              Yes
                            </option>
                            <option value="No">
                              No
                            </option>
                          </select>
                        </td>

                        <td>
                          <button
                            className="edit-save-btn"
                            onClick={() =>
                              saveEdit(entry.id)
                            }
                          >
                            <img
                              src="/Images/Icons/Tick.png"
                              alt="Save"
                            />
                          </button>

                          <button
                            className="edit-cancel-btn"
                            onClick={() =>
                              setEditingId(null)
                            }
                          >
                            <img
                              src="/Images/Icons/cross.png"
                              alt="Cancel"
                            />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{entry.name}</td>
                        <td>
                          {new Date(
                            entry.dateWon
                          ).toLocaleDateString("en-GB")}
                        </td>
                        <td>{entry.eventCashed}</td>
                        <td>
                          {new Date(
                            entry.dateCashed
                          ).toLocaleDateString("en-GB")}
                        </td>
                        <td>{weeksHeld}</td>
                        <td>{entry.successful}</td>

                        <td>
                          <button
                            className="icon-btn"
                            onClick={() =>
                              startEdit(entry)
                            }
                          >
                            <img
                              src="/Images/Icons/Edit.png"
                              alt="Edit"
                            />
                          </button>

                          <button
                            className="icon-btn delete-btn"
                            onClick={() =>
                              deleteRecord(entry.id)
                            }
                          >
                            <img
                              src="/Images/Icons/Delete.png"
                              alt="Delete"
                            />
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

export default MMITB;
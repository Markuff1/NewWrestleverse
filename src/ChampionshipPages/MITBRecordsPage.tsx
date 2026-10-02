import "./ChampionshipStyle.css";
import "./MITBStyle.css";
import React, { useEffect, useState } from "react";
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
import { formatChampionName } from "../RosterData";

// Utility to calculate weeks between two dates (never negative)
const calculateWeeksBetween = (start: string, end: string) => {
  if (!start || !end) return 0;

  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate.getTime() - startDate.getTime();

  return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7)));
};

type MITBRecord = {
  name: string;
  dateWon: string;
  eventCashed: string;
  dateCashed: string;
  successful: string;
};

type MITBEntry = MITBRecord & { id: string };

const EMPTY_FORM: MITBRecord = {
  name: "",
  dateWon: "",
  eventCashed: "",
  dateCashed: "",
  successful: "",
};

type MITBRecordsPageProps = {
  collectionId: string;
  bannerSrc: string;
  bannerAlt: string;
};

const MITBRecordsPage: React.FC<MITBRecordsPageProps> = ({
  collectionId,
  bannerSrc,
  bannerAlt,
}) => {
  const [entries, setEntries] = useState<MITBEntry[]>([]);
  const [form, setForm] = useState<MITBRecord>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<MITBRecord>(EMPTY_FORM);

  // Fallback end date for a briefcase that hasn't been cashed in yet, so
  // "weeks held" still shows how long they've held it so far.
  const today = new Date().toISOString().slice(0, 10);

  const fetchData = async () => {
    const querySnapshot = await getDocs(
      collection(db, "Wrestleverse", "ChampionshipData", collectionId)
    );

    const records = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data() as MITBRecord;
      return { id: docSnap.id, ...data, name: formatChampionName(data.name) };
    });

    // Sort newest first (by dateWon, fallback to dateCashed)
    records.sort((a, b) => {
      const dateA = new Date(a.dateWon || a.dateCashed).getTime();
      const dateB = new Date(b.dateWon || b.dateCashed).getTime();
      return dateB - dateA;
    });

    setEntries(records);
  };

  useEffect(() => {
    fetchData();
  }, [collectionId]);

  const addRecord = async () => {
    // Event/date cashed and successful are left blank for a briefcase
    // holder who hasn't cashed in yet — useCurrentChampions treats any
    // record with no dateCashed as the current holder.
    if (form.name && form.dateWon) {
      const record = { ...form, name: formatChampionName(form.name) };
      const docRef = await addDoc(
        collection(db, "Wrestleverse", "ChampionshipData", collectionId),
        record
      );

      setEntries([{ id: docRef.id, ...record }, ...entries]);
      setForm(EMPTY_FORM);
    }
  };

  const deleteRecord = async (id: string) => {
    await deleteDoc(
      doc(db, "Wrestleverse", "ChampionshipData", collectionId, id)
    );

    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const startEdit = (entry: MITBEntry) => {
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

    const updated = { ...editData, name: formatChampionName(editData.name) };
    await updateDoc(ref, updated);

    setEntries(
      entries.map((entry) =>
        entry.id === id ? { id, ...updated } : entry
      )
    );
    setEditingId(null);
  };

  return (
    <div>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">
          <img
            className="TitleHeaderImage"
            src={bannerSrc}
            alt={bannerAlt}
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
              <option value="">Not Cashed In Yet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <button
              className="icon-btn"
              onClick={addRecord}
              aria-label="Add Record"
            >
              <img src="/Images/Icons/Add.webp" alt="Add" />
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
                  entry.dateCashed || today
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
                            editData.dateCashed || today
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
                            <option value="">
                              Not Cashed In Yet
                            </option>
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
                              src="/Images/Icons/Tick.webp"
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
                              src="/Images/Icons/cross.webp"
                              alt="Cancel"
                            />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{entry.name}</td>
                        <td>
                          {entry.dateWon &&
                            new Date(
                              entry.dateWon
                            ).toLocaleDateString("en-GB")}
                        </td>
                        <td>{entry.eventCashed || "—"}</td>
                        <td>
                          {entry.dateCashed ? (
                            new Date(entry.dateCashed).toLocaleDateString("en-GB")
                          ) : (
                            <span className="PendingBadge">Not Cashed In Yet</span>
                          )}
                        </td>
                        <td>
                          {weeksHeld}
                          {!entry.dateCashed && " (so far)"}
                        </td>
                        <td>{entry.dateCashed ? (entry.successful || "—") : "—"}</td>

                        <td>
                          <button
                            className="icon-btn"
                            onClick={() =>
                              startEdit(entry)
                            }
                          >
                            <img
                              src="/Images/Icons/Edit.webp"
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
                              src="/Images/Icons/Delete.webp"
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

export default MITBRecordsPage;

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

// Weeks calculation
const calculateWeeksBetween = (start: string, end: string) => {
  if (!start || !end) return 0;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const diffTime = endDate.getTime() - startDate.getTime();
  return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7)));
};

const EMPTY_FORM = {
  name: "",
  dateWon: "",
  eventCashed: "",
  dateCashed: "",
  successful: "Yes",
};

const WMITB: React.FC = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [form, setForm] = useState(EMPTY_FORM);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState(EMPTY_FORM);

  const collectionId = "WMITB";

  // ---------------- FETCH ----------------
  const fetchData = async () => {
    const snapshot = await getDocs(
      collection(db, "Wrestleverse", "ChampionshipData", collectionId)
    );

    let records = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as any[];

    // Sort newest first
    records.sort((a, b) => {
      const aDate = new Date(a.dateWon || a.dateCashed || 0).getTime();
      const bDate = new Date(b.dateWon || b.dateCashed || 0).getTime();
      return bDate - aDate;
    });

    // Add derived field (DO NOT store in edit state)
    records = records.map((r) => ({
      ...r,
      weeksHeld: calculateWeeksBetween(r.dateWon, r.dateCashed),
    }));

    setEntries(records);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ---------------- ADD ----------------
  const handleAdd = async () => {
    if (!form.name || !form.dateWon || !form.dateCashed) return;

    const cleanData = { ...form };

    const docRef = await addDoc(
      collection(db, "Wrestleverse", "ChampionshipData", collectionId),
      cleanData
    );

    setEntries((prev) => [
      { id: docRef.id, ...cleanData },
      ...prev,
    ]);

    setForm(EMPTY_FORM);
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id: string) => {
    await deleteDoc(
      doc(db, "Wrestleverse", "ChampionshipData", collectionId, id)
    );

    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  // ---------------- EDIT START ----------------
  const startEdit = (entry: any) => {
    setEditingId(entry.id);

    // IMPORTANT: fully normalise to avoid weird overwrites
    setEditData({
      name: entry.name || "",
      dateWon: entry.dateWon || "",
      eventCashed: entry.eventCashed || "",
      dateCashed: entry.dateCashed || "",
      successful: entry.successful || "Yes",
    });
  };

  // ---------------- SAVE ----------------
  const handleSave = async (id: string) => {
    const ref = doc(
      db,
      "Wrestleverse",
      "ChampionshipData",
      collectionId,
      id
    );

    await updateDoc(ref, { ...editData });

    setEditingId(null);
    fetchData();
  };

  return (
    <div>
      <Header />

      <div className="ChampionshipBackground">
        <div className="MITBContainer">
          <img
            className="TitleHeaderImage"
            src="/Images/CBanners/WMITBBanner.png"
            alt="WMITB Banner"
          />

          <div className="reignstitle">MITB Records</div>

          {/* INPUTS */}
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
              onClick={handleAdd}
            >
              <img src="/Images/Icons/Add.png" alt="Add" />
            </button>
          </div>

          {/* TABLE */}
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

                const isEditing = editingId === entry.id;

                return (
                  <tr key={entry.id}>
                    {isEditing ? (
                      <>
                        <td>
                          <input
                            className="editname"
                            value={editData.name}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        </td>

                        <td>
                          <input
                            type="date"
                            value={editData.dateWon}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                dateWon: e.target.value,
                              }))
                            }
                          />
                        </td>

                        <td>
                          <input
                            value={editData.eventCashed}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                eventCashed: e.target.value,
                              }))
                            }
                          />
                        </td>

                        <td>
                          <input
                            type="date"
                            value={editData.dateCashed}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                dateCashed: e.target.value,
                              }))
                            }
                          />
                        </td>

                        <td>{weeksHeld}</td>

                        <td>
                          <select
                            value={editData.successful}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                successful: e.target.value,
                              }))
                            }
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <button
                            className="icon-btn"
                            onClick={() =>
                              handleSave(entry.id)
                            }
                          >
                            <img
                              src="/Images/Icons/Tick.png"
                              alt="Save"
                            />
                          </button>

                          <button
                            className="icon-btn delete-btn"
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
                          {entry.dateWon &&
                            new Date(entry.dateWon).toLocaleDateString(
                              "en-GB"
                            )}
                        </td>
                        <td>{entry.eventCashed}</td>
                        <td>
                          {entry.dateCashed &&
                            new Date(entry.dateCashed).toLocaleDateString(
                              "en-GB"
                            )}
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
                              handleDelete(entry.id)
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

export default WMITB;
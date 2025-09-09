import "./ChampionshipStyle.css";
import "./MITBStyle.css";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Header from "../Header";
import Footer from "../Footer";

const WMITB: React.FC = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    eventWon: "",
    eventCashed: "",
    dateCashed: "",
    reignLength: "",
    successful: "Yes",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState({ ...form });

  const collectionId = "WMITB";

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Wrestleverse", "ChampionshipData", collectionId));
    const records = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEntries(records);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (form.name && form.eventWon && form.successful) {
      const dataToAdd = { ...form, reignLength: Number(form.reignLength) };
      const docRef = await addDoc(collection(db, "Wrestleverse", "ChampionshipData", collectionId), dataToAdd);
      setEntries([{ id: docRef.id, ...dataToAdd }, ...entries]);
      setForm({ name: "", eventWon: "", eventCashed: "", dateCashed: "", reignLength: "", successful: "Yes" });
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "Wrestleverse", "ChampionshipData", collectionId, id));
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleSave = async (id: string) => {
    const ref = doc(db, "Wrestleverse", "ChampionshipData", collectionId, id);
    const dataToUpdate = { ...editData, reignLength: Number(editData.reignLength) };
    await updateDoc(ref, dataToUpdate);
    setEntries(entries.map(entry => (entry.id === id ? { id, ...dataToUpdate } : entry)));
    setEditingId(null);
  };

  return (
    <div>
      <Header />
      <div className="ChampionshipBackground">
        <div className="MITBContainer">
          <img className="TitleHeaderImage" src="/Images/CBanners/WMITBBanner.png" alt="MITB Banner" />

          <div className="reignstitle">MITB Records</div>

          <div className="InputContainer">
            <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input type="text" placeholder="Event Won" value={form.eventWon} onChange={e => setForm({ ...form, eventWon: e.target.value })} />
            <input type="text" placeholder="Event Cashed In" value={form.eventCashed} onChange={e => setForm({ ...form, eventCashed: e.target.value })} />
            <input type="date" value={form.dateCashed} onChange={e => setForm({ ...form, dateCashed: e.target.value })} />
            <input type="number" placeholder="Reign Length (Weeks)" value={form.reignLength} onChange={e => setForm({ ...form, reignLength: e.target.value })} />
            <select value={form.successful} onChange={e => setForm({ ...form, successful: e.target.value })}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <button onClick={handleAdd}>Add Record</button>
          </div>

          <table className="TitleHolderTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Event Won</th>
                <th>Event Cashed In</th>
                <th>Date Cashed In</th>
                <th>Reign Length (Weeks)</th>
                <th>Successful?</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(entry =>
                editingId === entry.id ? (
                  <tr key={entry.id}>
                    <td><input className='editname' value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} /></td>
                    <td><input className='editeventwon' value={editData.eventWon} onChange={e => setEditData({ ...editData, eventWon: e.target.value })} /></td>
                    <td><input className='editeventwon' value={editData.eventCashed} onChange={e => setEditData({ ...editData, eventCashed: e.target.value })} /></td>
                    <td><input className='editdate' type="date" value={editData.dateCashed} onChange={e => setEditData({ ...editData, dateCashed: e.target.value })} /></td>
                    <td><input className='editreign' value={editData.reignLength} onChange={e => setEditData({ ...editData, reignLength: e.target.value })} /></td>
                    <td>
                      <select value={editData.successful} onChange={e => setEditData({ ...editData, successful: e.target.value })}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td>
                      <button className="savebutton" onClick={() => handleSave(entry.id)}>Save</button>
                      <button className="cancelbutton" onClick={() => setEditingId(null)}>Cancel</button>
                    </td>
                  </tr>
                ) : (
                  <tr key={entry.id}>
                    <td>{entry.name}</td>
                    <td>{entry.eventWon}</td>
                    <td>{entry.eventCashed}</td>
                    <td>{entry.dateCashed}</td>
                    <td>{entry.reignLength}</td>
                    <td>{entry.successful}</td>
                    <td>
                      <button className="cancelbutton" onClick={() => { setEditingId(entry.id); setEditData({ ...entry }); }}>Edit</button>
                      <button className="deletebutton" onClick={() => handleDelete(entry.id)}>Delete</button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WMITB;

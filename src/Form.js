import { useEffect, useState, useRef, useLayoutEffect } from "react";
import useData from "./pages/data";
import Pic from "@/Pic";

function randomIntFromInterval(min, max, list = false) {
	// min and max included		
	const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
	if (list) {			
		const listIds = list.map(({ picId }) => picId);
		if (listIds.includes(randomNum)) {

			return randomIntFromInterval(min, max, list);
		}
	}
	return randomNum;
}

function randomLorem() {
	const lorem =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	return lorem.split(" ").splice(0, randomIntFromInterval(3, 20)).join(" ");
}

export default function Form() {
	const [newID, setNewID] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const data = useData();
	const [picData, setPicData] = useState(
		data.map(([id, title]) => ({ key: id, picId: id, title }))
	);
	return (
		<>
			<div className="addpic">
				<label>ID:</label>
				<input
					className="addID"
					type="text"
					value={newID}
					onChange={(e) => setNewID(e.target.value)}
				/>
			<label>Description:</label>
				<input
					className="addDesc"
					type="text"
					value={newDescription}
					onChange={(e) => setNewDescription(e.target.value)}
				/>
				<button
					type="button"
					onClick={() => {
						const picIds = picData.map(({ picId }) => picId);
						const dupeCount = picIds.filter((id) => id === newID).length;

						setPicData([
							{ key: `${newID}-${dupeCount}`, picId: newID, title: newDescription },
							...picData,
						]);
						setNewID('');
						setNewDescription('');
					}}
					disabled={newID === ''}
				>
					Add
				</button>
				<button
					type="button"
					onClick={() => {
						const id = randomIntFromInterval(1, 1084, picData);
						setPicData([
							{ key: id, picId: id, title: randomLorem() },
							...picData,
						]);
					}}
				>
					Random
				</button>
			</div>
			<div className="gallery-flex">
				{picData.map(({ key, picId, title }) => (
					<Pic key={key} id={picId} title={title} />
				))}
			</div>
		</>
	);
}

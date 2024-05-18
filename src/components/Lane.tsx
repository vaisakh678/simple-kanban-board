import React from "react";
import Task from "./Task";
import { createTask, ILane } from "../store/slices/todoSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

interface ILaneProps {
	data: ILane;
}

const Lane: React.FC<ILaneProps> = ({ data }) => {
	const dispatch = useDispatch<AppDispatch>();
	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
	};
	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	};
	return (
		<div className="rounded relative flex flex-col" onDrop={handleDrop} onDragOver={handleDragOver}>
			<h4 className="m-2.5 my-4 font-semibold text-slate-500 text-2xl flex justify-between">
				<span>{data.laneTitle ?? "- -"}</span>
				<span>{data.totalPoints ?? "- -"}</span>
			</h4>
			<div className="overflow-y-scroll flex-1 mb-14">
				{data.tasks.map((item) => (
					<Task key={item.id} data={item} laneId={data.id} />
				))}
			</div>
			<div className="flex justify-end px-1 absolute bottom-5 right-5">
				<span className="flex space-x-2">
					<button onClick={() => dispatch(createTask(data.id))}>
						<IoIosAddCircle className="w-6 h-6" />
					</button>
					<button>
						<MdDeleteForever className="w-6 h-6" />
					</button>
				</span>
			</div>
		</div>
	);
};

export default Lane;

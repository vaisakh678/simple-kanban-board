import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa";
import { decPoint, incPoint, ITask } from "../store/slices/todoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

interface ITaskProps {
	data: ITask;
	laneId: string;
}

const Task: React.FC<ITaskProps> = ({ data, laneId }) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className="m-3 w-56 h-24 rounded p-2.5 bg-slate-50 border border-slate-200 flex flex-col justify-between" draggable>
			<span>{data.title}</span>
			<div className="flex justify-between text-slate-500">
				<div>
					<CiBookmarkPlus />
				</div>
				<div className="flex items-center space-x-2">
					<button onClick={() => dispatch(decPoint({ laneId, taskId: data.id }))}>
						<FaMinus />
					</button>
					<span className="min-w-4 text-center">{data.points ?? "-"}</span>
					<button onClick={() => dispatch(incPoint({ laneId, taskId: data.id }))}>
						<FaPlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Task;

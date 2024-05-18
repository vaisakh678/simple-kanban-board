import React from "react";
import Lane from "./Lane";
import Divider from "./Divider";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { createLane } from "../store/slices/todoSlice";

const KanbanBoard: React.FC = () => {
	const lanes = useSelector((store: RootState) => store.todoReducer.lanes);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<div className="flex w-full h-full relative rounded bg-slate-100">
			<div className="flex overflow-x-scroll">
				{lanes.map((lane, idx) => {
					return (
						<React.Fragment key={lane.id}>
							<Lane data={lane} />
							{idx === lanes.length - 1 ? null : <Divider />}
						</React.Fragment>
					);
				})}
			</div>
			<div className="absolute bottom-10 right-10">
				<button onClick={() => dispatch(createLane())}>
					<IoIosAddCircle className="w-10 h-10" />
				</button>
			</div>
		</div>
	);
};

export default KanbanBoard;

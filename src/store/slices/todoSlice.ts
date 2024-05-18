import { createSlice } from "@reduxjs/toolkit";

export interface ITask {
	id: string;
	title: string;
	points: number;
}

export interface ILane {
	id: string;
	laneTitle: string;
	totalPoints: number;
	tasks: Array<ITask>;
}

interface IInitialState {
	lanes: Array<ILane>;
}

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		lanes: [
			{
				id: "132-432-714",
				laneTitle: "lane 1",
				totalPoints: 0,
				tasks: [
					{
						id: "573-7534-d244",
						title: "task 1",
						points: 0,
					},
					{
						id: "234-282-844",
						title: "task 2",
						points: 0,
					},
				],
			},
			{
				id: "242-422-784",
				laneTitle: "lane 2",
				totalPoints: 0,
				tasks: [
					{
						id: "402-502-420",
						title: "task 3",
						points: 0,
					},
				],
			},
		],
	} as IInitialState,
	reducers: {
		createLane: (state) => {
			state.lanes.push({
				id: crypto.randomUUID(),
				laneTitle: "title..",
				totalPoints: 0,
				tasks: [
					{
						id: crypto.randomUUID(),
						title: "title..",
						points: 0,
					},
				],
			});
		},
		updateLane: (state, action) => {
			const { laneId, title } = action.payload;
			const laneIdx = state.lanes.findIndex((item) => item.id === laneId);
			if (laneIdx === -1) return;
			state.lanes[laneIdx].laneTitle = title;
		},
		createTask: (state, action) => {
			const idx = state.lanes.findIndex((item) => item.id === action.payload);
			if (idx === -1) return;
			state.lanes[idx].tasks.push({
				id: crypto.randomUUID(),
				title: "",
				points: 0,
			});
		},
		updateTask: (state, action) => {
			const { laneId, taskId, title } = action.payload;
			const laneIdx = state.lanes.findIndex((item) => item.id === laneId);
			if (laneIdx === -1) return;
			const taskIdx = state.lanes[laneIdx].tasks.findIndex((item) => item.id === taskId);
			if (taskIdx === -1) return;
			state.lanes[laneIdx].tasks[taskIdx].title = title;
		},
		incPoint: (state, action) => {
			const { laneId, taskId } = action.payload;
			const laneIdx = state.lanes.findIndex((item) => item.id === laneId);
			if (laneIdx === -1) return;
			const taskIdx = state.lanes[laneIdx].tasks.findIndex((item) => item.id === taskId);
			if (taskIdx === -1) return;
			state.lanes[laneIdx].totalPoints++;
			state.lanes[laneIdx].tasks[taskIdx].points++;
		},
		decPoint: (state, action) => {
			const { laneId, taskId } = action.payload;
			const laneIdx = state.lanes.findIndex((item) => item.id === laneId);
			if (laneIdx === -1) return;
			const taskIdx = state.lanes[laneIdx].tasks.findIndex((item) => item.id === taskId);
			if (taskIdx === -1) return;
			state.lanes[laneIdx].totalPoints--;
			state.lanes[laneIdx].tasks[taskIdx].points--;
		},
	},
});

export default todoSlice.reducer;
export const { createLane, updateLane, createTask, updateTask, incPoint, decPoint } = todoSlice.actions;

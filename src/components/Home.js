import React from "react";
import MuiTable from "./tables/MuiTable";

const columns = [
    { title: "A", key: "a" },
    { title: "B", key: "b", sort: true },
    { title: "C", key: "c" },
    { title: "C", cb: () => { return "hello" } }
];

const rows = [
    { id: 1, a: "A 1", b: "B 1", c: "C 1" },
    { id: 2, a: "A 2", b: "B 2", c: "C 2" },
    { id: 3, a: "A 3", b: "B 3", c: "C 3" },
]


function Home() {
    return (
        <div>
            <MuiTable pColumns={columns} pRows={rows} tableProps={{}} />
        </div>
    );
}

export default Home;
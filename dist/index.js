"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
console.log("ID | Name                  | Channel | Seasons");
console.log("---|----------------------|---------|--------");
for (const s of data_1.series) {
    console.log(`${s.id}  | ${s.name.padEnd(21)} | ${s.channel.padEnd(7)} | ${s.seasons}`);
}
const promedio = data_1.series.reduce((sum, s) => sum + s.seasons, 0) / data_1.series.length;
console.log(`\nPromedio de temporadas: ${promedio.toFixed(2)}`);
//# sourceMappingURL=index.js.map
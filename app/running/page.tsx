import { RaceResult, races11, races23, races24, races25, races26 } from "./race_result";

function RaceResultCard({ race } : { race: RaceResult }) {
    return (
        <div className="px-2 py-2 basis-full lg:basis-1/3">
            <div className="border rounded-lg py-2 shadow-lg h-full">
                <div className="text-xl font-bold px-4">{race.name}</div>
                <div className="text-l px-4"><strong>Date</strong>: {race.date}</div>
                <div className="text-l px-4"><strong>Distance</strong>: {race.distance}</div>
                <div className="text-l px-4"><strong>Time</strong>: {race.time}</div>
                <div className="text-l px-4"><strong>Terrain</strong>: {race.terrain}</div>
            </div>
        </div>
    )
}

function RaceYear({ year, races } : { year: number, races: RaceResult[] }) {
    return (
        <>
            <div className="text-xl font-bold px-16 py-2">{year}</div>
            <div className="flex flex-row flex-wrap px-16">
                {races.map(r => <RaceResultCard race={r} key={`${year}-${r.date}`} />)}
            </div>
        </>
    )
}

export default function Running() {
    return (
      <div className="pb-2 container mx-auto">
        <div className="text-2xl font-bold px-16 py-4">Running</div>
        <RaceYear
            year={2026}
            races={races26}
        />
        <RaceYear
            year={2025}
            races={races25}
        />
        <RaceYear
            year={2024}
            races={races24}
        />
        <RaceYear
            year={2023}
            races={races23}
        />
        <RaceYear
            year={2011}
            races={races11}
        />
      </div>
    );
  }
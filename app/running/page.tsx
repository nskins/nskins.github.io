function RaceResult({ name, date, distance, time, terrain }
    :
    {
        name : string,
        date : string,
        distance : string,
        time : string,
        terrain : string
    }
) {
    return (
        <div className="even:bg-gray-200 py-2">
            <div className="text-xl font-bold px-16">{name}</div>
            <div className="text-l px-16"><strong>Date</strong>: {date}</div>
            <div className="text-l px-16"><strong>Distance</strong>: {distance}</div>
            <div className="text-l px-16"><strong>Time</strong>: {time}</div>
            <div className="text-l px-16"><strong>Terrain</strong>: {terrain}</div>
        </div>
    )
}

export default function Running() {
    return (
      <div className="pb-2">
        <div className="text-2xl font-bold px-16 py-4">Running</div>
        <RaceResult
            name="Phoenix Marathon"
            date="Dec. 13, 2025"
            distance="26.2 mi"
            time="3:08:09"
            terrain="Road"
        />
        <RaceResult
            name="Pines to Vines 55K"
            date="Aug. 10, 2025"
            distance="55 km"
            time="5:42:09"
            terrain="Trail"
        />
        <RaceResult
            name="Clawson Firecracker Mile"
            date="Jul. 4, 2025"
            distance="1 mi"
            time="5:01"
            terrain="Road"
        />
        <RaceResult
            name="Clawson Freedom Run 5K"
            date="Jun. 29, 2025"
            distance="5 km"
            time="18:04"
            terrain="Road"
        />
        <RaceResult
            name="Island Time 24 Hour"
            date="Jun. 6, 2025"
            distance="110 mi"
            time="22:51:34"
            terrain="Trail"
        />
        <RaceResult
            name="Trail Weekend Marathon"
            date="Apr. 26, 2025"
            distance="26.2 mi"
            time="3:37:52"
            terrain="Trail"
        />
        <RaceResult
            name="University of Michigan Health-West Grand Rapids Marathon"
            date="Oct. 20, 2024"
            distance="26.2 mi"
            time="3:17:31"
            terrain="Road"
        />
        <RaceResult
            name="Pines to Vines 55K"
            date="Aug. 11, 2024"
            distance="55 km"
            time="6:21:06"
            terrain="Trail"
        />
        <RaceResult
            name="Clawson Firecracker Mile"
            date="Jul. 4, 2024"
            distance="1 mi"
            time="5:03"
            terrain="Road"
        />
        <RaceResult
            name="Clawson Freedom Run 5K"
            date="Jun. 30, 2024"
            distance="5 km"
            time="18:50"
            terrain="Road"
        />
        <RaceResult
            name="Perfect PR Backyard Ultra"
            date="May 18, 2024"
            distance="79.1 mi"
            time="19 hours"
            terrain="Road/Trail"
        />
        <RaceResult
            name="Romeo Winterfest 5K"
            date="Feb. 3, 2024"
            distance="5 km"
            time="18:15"
            terrain="Road"
        />
        <RaceResult
            name="Black Toenail Friday Half Marathon"
            date="Nov. 24, 2023"
            distance="13.1 mi"
            time="1:41:36"
            terrain="Trail"
        />
        <RaceResult
            name="Detroit Free Press Marathon"
            date="Oct. 15, 2023"
            distance="26.2 mi"
            time="3:42:46"
            terrain="Road"
        />
        <RaceResult
            name="Run For Nature 5K"
            date="Jun. 11, 2023"
            distance="5 km"
            time="20:07"
            terrain="Road"
        />
        <RaceResult
            name="Fifth Annual Creekfest 5K"
            date="Jun. 4, 2011"
            distance="5 km"
            time="17:56"
            terrain="Road"
        />
      </div>
    );
  }
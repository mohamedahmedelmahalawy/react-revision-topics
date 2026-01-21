import { useDeferredValue, useState } from "react";
type Names = string[];
const allNames = Array.from({ length: 10000 }, (_, i) => {
  const baseNames = [
    "jack",
    "jill",
    "john",
    "james",
    "jenny",
    "jessica",
    "jasmine",
    "javier",
    "joseph",
    "julian",
    "jordan",
    "joel",
    "jose",
    "jocelyn",
    "joy",
    "jade",
    "jamie",
    "jeffrey",
    "jeremy",
    "josefa",
    "jovan",
    "jovanny",
    "jovita",
    "josefina",
    "josephine",
    "josue",
    "juan",
    "julio",
    "justin",
    "kaitlyn",
    "karen",
    "katelyn",
    "kathleen",
    "katrina",
    "kayla",
    "kevin",
    "kimberly",
    "kyle",
    "lance",
    "lauren",
    "leah",
    "logan",
    "louis",
    "lucas",
    "luke",
    "lydia",
    "madeline",
    "madison",
    "makayla",
    "maria",
    "marie",
    "mark",
    "mason",
    "mathew",
    "megan",
    "melissa",
    "michelle",
    "morgan",
    "nancy",
    "natalie",
    "nicholas",
    "nicole",
    "olivia",
    "paige",
    "patrick",
    "paul",
    "peter",
    "philip",
    "rachel",
    "rebecca",
    "richard",
    "robert",
    "ryan",
    "samantha",
    "sarah",
    "savannah",
    "scott",
    "sean",
    "sophia",
    "stephen",
    "steven",
    "sydney",
    "taylor",
    "thomas",
    "tyler",
    "victoria",
    "william",
    "zachary",
    "zoe",
  ];
  return `${baseNames[i % baseNames.length]}-${i}`;
});

function DeferredValueListTwo() {
  const [search, setSearch] = useState<string>("");
  const deferredSearch: string = useDeferredValue(search);
  const filterNames: Names = allNames.filter((name) =>
    name.includes(deferredSearch),
  );
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />
      <div>
        {deferredSearch !== search && <div>Updating List...</div>}
        {filterNames.map((n) => (
          <article key={n}>{n}</article>
        ))}
      </div>
    </div>
  );
}

export default DeferredValueListTwo;

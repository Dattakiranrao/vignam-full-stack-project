import React, { useState } from "react";

export default function Questions({ questionAndOptions }) {

  const [checkedState, setCheckedState] = useState(
    new Array(questionAndOptions[0].options.length).fill(false),
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <div className="flex flex-col pt-2">
        <div>
          <div>{questionAndOptions[0].question}</div>
        </div>
        <div className="pt-2">
          {questionAndOptions[0].options.map((o, key) => (
            <>
              <div className="flex mt-2"  key={key}>
                <input
                  type="checkbox"
                  id={o.opt}
                  value={o.opt}
                  name={o.opt}
                  checked={checkedState[key]}
                  onChange={() => handleOnChange(key)}
                />
                <div className={checkedState[key] && o.isTrue ? `mx-2 bg-green-100 w-full mt-1`: `mx-2 bg-gray-50 w-full mt-1`}>{o.opt}{console.log(checkedState[key])}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

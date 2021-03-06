import React from "react";

interface proptypes {
    activeWeek: number;
    activeDay: number[];
}

export default (props:proptypes) => {
  return (
    <div className="readybox">
      <h2>Checklist</h2>
      <div className="checklistarea">
        <label>
          <input type="checkbox" className="checkbox" id="lessonrecap" />
          Lesson Recap
        </label>
        <label>
          <input type="checkbox" id="complete" className="checkbox" />
          Lesson Complete
        </label>
      </div>
    </div>
  );
};

import React from 'react';
import "../section/Section.css";

function Section({ className, text }) {
  return (
    <section className={className}>
      <div className="container">
        <div className="section-main display-3 pt-5">{text}</div>
        <p className="section-line m-0 pb-5" style={{width:"550px"}}></p>
      </div>
    </section>
  );
};

Section.defaultProps = {
  className: '',
  icon: undefined
};

export default Section;
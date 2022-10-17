import React from 'react';

function Section({ className, title, icon, children }) {
  return (
    <section className={className}>
      <h1 className='m-0 fs-3 text-danger'>
        {icon && <i className={`fa fa-${icon} me-1`} />}
        {title}
      </h1>
      <hr className='mt-0'/>
      {children}
    </section>
  );
};

Section.defaultProps = {
  className: '',
  icon: undefined
};

export default Section;
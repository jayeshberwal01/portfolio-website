import React from 'react';

const Section = ({ id, title, icon: Icon, children, className = '' }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
          {Icon ? <Icon className="text-cyber" size={28} /> : <span className="text-cyber">#</span>}
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};

export default Section;

import React, { Fragment } from 'react';

const StaticTemplate = (props: { list: string; paragraph: string; id: number }) => {
  const { list, paragraph, id } = props;
  return (
    <Fragment key={id}>
      <li>{list}</li>
      <p>{paragraph}</p>
    </Fragment>
  );
};

export default StaticTemplate;

import React from 'react';

function QuestionSummary (props) {
  const {id, title, created_at } = props;
  return (
    <div className='QuestionSummary'>
      <a href>{title}</a> • {created_at}
    </div>
  );
}

export default QuestionSummary;

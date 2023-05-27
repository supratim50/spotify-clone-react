import React from 'react';
import "./TagButton.css";

const TagButton = ({text, style}) => {
  return (
    <div className={`py-2 px-3 bgSecondary1 tag-button ${style && style}`}>{text}</div>
  )
}

export default TagButton
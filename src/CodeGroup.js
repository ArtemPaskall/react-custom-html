import React, { useEffect } from 'react';
import './Style.css';

  const  CodeGroup = ({ children }) => {
    const tabContent = document.getElementsByClassName('tabcontent');
    const tabLinks = document.getElementsByClassName('tablinks');

    useEffect(() => {
      for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }

      tabContent[0].style.display = "block";
      tabLinks[0].className += " active";
    }, [])

  function showTab(index) {
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");

      if (i === index) {
        tabContent[i].style.display = "block";
        tabLinks[i].className += " active";
      }
    }
  }

  return (
      <div className='wrap'>
        <div className="tab">
          {children.map((element, index) => (
              <div className="tablinks" onClick={() => showTab(index)} key={Math.random()}>{element.props.title}</div>
          ))}
        </div>

        <div className='tabcontent-border'>
        {children.map((element, index) => (
            <div id={index} className="tabcontent" key={Math.random()}>
              <div className='tabcontent-item'> {element.props.children}</div>
            </div>
          ))}
        </div>
      </div>
  );
  }

export default CodeGroup;

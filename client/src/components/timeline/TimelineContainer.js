import { useState, useEffect } from "react";
import TimelineItem from "./TimelineItem";

function TimelineContainer(){
  const [cards, setCards] = useState([]);
  const [cardExpanded, setCardExpanded] = useState({
    isExpanded: false, 
    selected: {},
    selectedYear: ""
  });
  useEffect(() => {
    function fetchCards(){
      fetch('/cards')
      .then(response => response.json())
      .then(result => setCards(result));
    }
    fetchCards();
  }, []);

  function getFormattedData(items) {
    const timelineCards = {};
    items.forEach((item) => {
      const dateStr = new Date(item.year, 1).getFullYear()
      const list = timelineCards[dateStr] || [];
      list.push({
        id: item.id,
        description: item.description, 
        url: item.image_url,
        year: dateStr
      });
      timelineCards[dateStr] = list;
    });
    return timelineCards;
  }
  const activities = getFormattedData(cards);
  const dates = Object.keys(activities);
  

  
return(
  <div className="timeline-container">
    {dates.map(d => (
      <div className={cardExpanded.isExpanded && cardExpanded.selected.year == d ? "timeline-group-container-expanded" : "timeline-group-container"}>
        <div className={cardExpanded.isExpanded && cardExpanded.selected.year == d ? "timeline-group-expanded" : "timeline-group"}>
          <h1 className={cardExpanded.isExpanded && cardExpanded.selected.year == d ? "timeline-date-expanded" : "timeline-date"}>{d}</h1>
          {activities[d].map((card) => (
            <TimelineItem card={card} setCardExpanded={setCardExpanded} cardExpanded={cardExpanded} d={d}/>
          ))}
          
        </div>
        <span className="circle"></span>
      </div>
    ))}
  </div>
)
}

export default TimelineContainer
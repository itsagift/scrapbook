import { useState, useEffect } from "react";
import TimelineItem from "./TimelineItem";
import { useParams } from "react-router-dom";
import TimelineHeader from "./TimelineHeader";

function TimelineContainer(){
  const [cards, setCards] = useState([]);
  const [cardExpanded, setCardExpanded] = useState({
    isExpanded: false, 
    selected: {},
    selectedYear: ""
  });

  let {id} = useParams();

  useEffect(() => {
    function fetchCards(){
      fetch(`/albums/${id}`)
      .then(response => response.json())
      .then(result => setCards(result.album_cards));
    }
    fetchCards();
  }, []);

  function getFormattedData(items) {
    const timelineCards = {};
    items.forEach((item) => {
      const dateStr = new Date(item.card.year, 1).getFullYear()
      const list = timelineCards[dateStr] || [];
      list.push({
        id: item.card.id,
        description: item.card.description, 
        url: item.card.image_url,
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
    <TimelineHeader/>
  <div className="timeline">
    {dates.map(d => (
      <div className={cardExpanded.isExpanded && cardExpanded.selected.year == d ? "timeline-group-container-expanded" : "timeline-group-container"}>
      <div className={cardExpanded.isExpanded && cardExpanded.selected.year == d ? "timeline-group-expanded" : "timeline-group"} data-attribute={d}>
        <h1 className={cardExpanded.isExpanded && cardExpanded.selected.year == d ? "timeline-date-expanded" : "timeline-date"}>{d}</h1>
        {activities[d].map((card) => (
          <TimelineItem card={card} setCardExpanded={setCardExpanded} cardExpanded={cardExpanded} d={d}/>
        ))}
        </div>
        <span className="circle"></span>
      </div>
    ))}
  </div>
  </div>
)
}

export default TimelineContainer
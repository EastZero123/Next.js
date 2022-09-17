import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { id, title, location, date, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summaey}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
      {console.log(props)}
    </li>
  );
}

export default EventItem;

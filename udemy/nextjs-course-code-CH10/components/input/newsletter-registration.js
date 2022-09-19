import { useContext, useRef } from "react"
import NotificationContext from "../../store/notification-context"
import classes from "./newsletter-registration.module.css"

function NewsletterRegistration() {
  const emailInputRef = useRef()

  function registrationHandler(event) {
    event.preventDefault()
    const notificationCtx = useContext(NotificationContext)

    const enteredEmail = emailInputRef.current.value

    notificationCtx.showNotification({
      title: "Signing up",
      message: "Registering for newsletter",
      status: "pending",
    })

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something wrong")
        })
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Signing up",
          message: "Registering for newsletter",
          status: "pending",
        })
      })

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}

export default NewsletterRegistration

import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "./styles.module.scss";

const routing =
  "https://functionaltutoring.us7.list-manage.com/subscribe/post?u=7849af733b1b543ebd1755511&amp;id=acddc4abbb";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div className={styles.email_form}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <p className={styles.indicates_required}>
        <span className={styles.asterisk}>*</span> Indicates required
      </p>
      <div className={styles.inputs}>
        <label className={styles.field_header}>Name</label>
        <input
          className={styles.input_field}
          ref={(node) => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <label className={styles.field_header}>
          <span className={styles.asterisk}>*</span> Email Address
        </label>
        <input
          className={styles.input_field}
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button className={styles.button} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export class EmailForm extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>
          Join our mailing list for updates and promotions!
        </h2>
        <MailchimpSubscribe
          url={routing}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

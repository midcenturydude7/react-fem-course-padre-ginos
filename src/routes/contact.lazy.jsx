import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
    // onError: (error) => {
    //   console.error("Error sending message:", error);
    //   alert("Failed to send message. Please try again later.");
    // },
  });
  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

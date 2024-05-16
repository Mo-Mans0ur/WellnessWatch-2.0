package main

import (
    "log"
    "net/http"
    "net/smtp"
    "github.com/gorilla/mux"
)

func SendNotification(w http.ResponseWriter, r *http.Request) {
    // Example email details
    from := "sender@example.com"
    to := "recipient@example.com"
    subject := "Notification"
    body := "Hello, this is a notification!"

    smtpHost := "smtp.example.com"
    smtpPort := "587"
    auth := smtp.PlainAuth("", "username", "password", smtpHost)

    msg := []byte("To: " + to + "\r\n" +
        "Subject: " + subject + "\r\n" +
        "\r\n" + body + "\r\n")

    err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{to}, msg)
    if err != nil {
        log.Printf("Error sending notification: %v", err)
        w.WriteHeader(http.StatusInternalServerError)
        w.Write([]byte("Error sending notification"))
        return
    }

    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Notification sent successfully"))
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/api/notify", SendNotification).Methods("POST")
    log.Println("Server started on port 8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}

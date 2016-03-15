module.exports = {

sendEmail: function(options) {

        var template = "email";

        var data = {
            recipientName: "InTraffic Team",
            senderName: "InTraffic News",
            senderEmail: "no-reply@intraffic.com.ve",
            message: options.message,
            subject: options.subject,
            fecha: options.fecha
        };

        var opts = {
                "subject": options.subject,
                "from_email": "no-reply@intraffic.com.ve",
                "from_name": "Intraffic News",
                "to": "info@intraffic.com.ve",
                "text": options.message            
        };

        sails.hooks.email.send(template, data, opts, function(err) {
            if (err) {sails.log.debug(err); }
            else { sails.log.debug("Enviado"); }            
        });
    }
};
export default function ContactMap() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18707.20690442675!2d-114.405726!3d54.119823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539f5c18a724684f%3A0xedf8c7a2dc007297!2sBarrhead%20Healthcare%20Centre!5e0!3m2!1sen!2sus!4v1744270241615!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

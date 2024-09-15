const Clients = (props) => {
  const {img, alt, h3, p} = props;
  return (
    <section className="flex flex-col items-center md:w-1/3">
      <img src={img} alt={alt} />
      <h3 className="text-2xl font-semibold text-brandSecondary">{h3}</h3>
      <p className="text-neutralDarkGray">{p}</p>
    </section>
  );
};

const Helping = (props) => {
  const {img, alt, span, p} = props;
  return (
    <section className="flex space-x-5">
      <img src={img} alt={alt} />
      <p className="text-2xl font-semibold text-brandSecondary">
        {p} <br />
        <span className="text-sm font-normal text-neutralDarkGray">{span}</span>
      </p>
    </section>
  );
};

export {Clients, Helping};

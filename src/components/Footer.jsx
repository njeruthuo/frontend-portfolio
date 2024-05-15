const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-20 bg-slate-800 py-12">
      <p>
        Copyright<sup>&copy;</sup> {` ${new Date().getFullYear()}.`}
      </p>
      <p>
        All rights reserved by{" "}
        <span className="font-bold text-gray-950 hover:text-red-500 hover:cursor-pointer">
          <a href="https://twitter.com/njeru19_njeru/" target="_blank">Julius Njeru Thuo</a>
        </span>
      </p>
    </div>
  );
};
export default Footer;

interface BlockProps {
  isImg?: boolean;
  isH1?: boolean;
  h1: string;
  p: string;
  isButtons?: boolean;
}

const Block = ({ isImg, isH1, h1, p, isButtons }: BlockProps) => {
  return (
    <section className="w-[692px] flex flex-col items-center justify-center gap-5 text-center md:w-auto revealL">
      {isImg && (
        <img
          src="./logo.svg"
          alt="logo"
          className="md:w-[126px] md:h-[126px]"
        />
      )}
      {isH1 ? (
        <h1 className="font-bold text-[42px] md:text-3xl text-dark-grayish-blue">
          {h1}
        </h1>
      ) : (
        <h2 className="font-bold text-3xl text-dark-grayish-blue">{h1}</h2>
      )}
      <p className="text-[19px] text-grayish-blue">{p}</p>
      {isButtons && (
        <div className="flex gap-4 mt-10 md:flex-col md:w-full">
          <button className="h-14 w-[227px] rounded-full bg-strong-cyan text-white text-lg hover:opacity-50 transition-opacity md:w-full">
            Download for iOS
          </button>
          <button className="h-14 w-[227px] rounded-full bg-light-blue text-white text-lg hover:opacity-50 transition-opacity md:w-full">
            Download for Mac
          </button>
        </div>
      )}
    </section>
  );
};

export default Block;

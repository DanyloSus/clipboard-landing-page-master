interface BlockProps {
  isImg?: boolean;
  isH1?: boolean;
  h1: string;
  p: string;
  isButtons?: boolean;
}

const Block = ({ isImg, isH1, h1, p, isButtons }: BlockProps) => {
  return (
    <section className="w-[692px] flex flex-col items-center justify-center gap-5 text-center">
      {isImg && <img src="./logo.svg" alt="logo" />}
      {isH1 ? (
        <h1 className="font-bold text-[42px]">{h1}</h1>
      ) : (
        <h2 className="font-bold text-3xl">{h1}</h2>
      )}
      <p className="text-[19px]">{p}</p>
      {isButtons && (
        <div className="flex gap-4 mt-10">
          <button className="h-14 w-[227px] rounded-full bg-strong-cyan text-white text-lg hover:opacity-50 transition-opacity">
            Download for iOS
          </button>
          <button className="h-14 w-[227px] rounded-full bg-light-blue text-white text-lg hover:opacity-50 transition-opacity">
            Download for Mac
          </button>
        </div>
      )}
    </section>
  );
};

export default Block;

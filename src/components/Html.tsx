import React from "react";

const Html = () => {
  return (
    <article className="relative flex justify-center items-center w-[420px] mx-auto mb-10 bg-zinc-100 rounded-2xl shadow-xl p-8 gap-4 flex-col">
      <h2 className="text-2xl font-bold text-center">Формы</h2>
      <form className="flex flex-col gap-2">
        <p>В таких штуках можно писать</p>
        <input type="text" placeholder="Пиши сюда текст" />
        <label htmlFor="tname">Здесь текст появляется из атрибута</label>
        <input type="text" id="tname" value="Текст" />
      </form>

      <form className="flex flex-col gap-2">
        <div className="flex ">
          <p>
            Здесь переключатель. Значение может быть только одно. Они связаны,
            так как имеют общий атрибут "name"
          </p>
        </div>
        <div className=" flex gap-2 justify-center">
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">HTML</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">CSS</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>
          <input type="radio" name="fav_language" />
        </div>
      </form>

      <form className="flex gap-2">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> I have a bike</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label htmlFor="vehicle3"> I have a boat</label>
      </form>
    </article>
  );
};

export default Html;

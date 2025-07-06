
import PG from '../../assets/images/hero2.png'

export default (data, locale) => {
  return /*html*/ `
    <div class="not-found-container">
      <img
        src="${PG}"
        alt="🤷‍♂️ 404 Not Found"
        class="not-found-image"
        style="width: 400px; height: auto;"
      />
      <h1 class="not-found-title">Oops! Page Not Found</h1>
      <p class="not-found-text">
        ${locale.errors?.notFound || "The page you're looking for doesn't exist."}
      </p>
    </div>
  `;
};

<template>
  <div class="page-container">
    <div class="page-menu">
      <form style="padding: 0 10px">
        <div class="form-input">
          <label>E-mail:</label>
          <input type="email" required>
        </div>
        <div class="form-input">
          <label>Пароль:</label>
          <input type="password" required>
        </div>
        <div class="form-input button-blue button-wide">
          <button>Войти</button>
        </div>
        <div class="form-input">
          <div style="text-align: center;">
            <a href="/">Не можете войти?</a>
          </div>
        </div>
      </form>
    </div>
    <div class="page-layout">
      <div class="page-header">Добро пожаловать</div>
      <div class="page-content">
        <p>
          <strong>ВКонтакте</strong> – универсальное средство для коммуникации и поиска людей, <br>
          которым ежедневно пользуются десятки миллионов человек.
        </p>
        <h2>Моментальная регистарция</h2>
        <form autocomplete="off" style="padding: 20px 30%">
          <div class="form-input">
            <input type="text" placeholder="Ваше имя">
          </div>
          <div class="form-input">
            <input type="text" placeholder="Ваша фамилия">
          </div>
          <div class="form-input button-blue button-wide">
            <button>Зарегистрироваться</button>
          </div>
        </form>
        <h2>В чем поможет ВКонтакте?</h2>
        <div style="padding: 10px 4%">
          <ul>
            <li>Найти людей, с которыми Вы когда-либо учились, работали или отдыхали.</li>
            <li>Узнать больше о людях, которые Вас окружают, и найти новых друзей.</li>
            <li>Всегда оставаться в контакте с теми, кто Вам дорог.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div style="display: flex; width: 100%">
    <div style="flex: 1"></div>
    <div style="flex: 4; padding: 15px 10px">
      <div class="page-footer">
        <div class="footer-link">
          <a href="/">о сайте</a>
        </div>
        <div class="footer-link">
          <a href="/">о сайте</a>
        </div>
        <div class="footer-link">
          <a href="/">о сайте</a>
        </div>
        <div class="footer-link">
          <a href="/">о сайте</a>
        </div>        <div class="footer-link">
        <a href="/">о сайте</a>
      </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 0 5px;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.page-container .page-menu {
  width: 100%;
  height: 100%;
  flex: 1;
}

/*CSS FOR PAGE LAYOUT*/
.page-container .page-layout {
  width: 100%;
  height: 100%;
  flex: 4;
  border: solid 2px #e7ebef;
}

.page-footer {
  display: flex;
  flex-direction: row;
  column-gap: 10px;

}
.page-footer .footer-link {

}

li {
  list-style-type: square;
}
li::marker {
  color: #5c6e82;
}


.page-layout .page-header {
  font-weight: bold;
  color: #5c6e82;
  background-color: #e7ebef;
  padding: 5px 0 5px 5px;
}

.page-layout .page-content {
  padding: 20px 10%;
}

h2 {
  padding-top: 20px;
  padding-bottom: 3px;
  font-size: 13px;
  color: #45668d;
  width: 100%;
  border-bottom: 1px solid #dfe2e6;
}

form .form-input {
  margin-top: 10px;
}
form .form-input input {
  margin-top: 4px;
  padding: 3px 0 3px 4px;
  border-radius: 0;
  border: solid 1px #cdd0d4;
  width: 100%;
}

.form-input label {
  color: #5c5c5c;
}

.form-input a {
  color: #45668d;
  text-decoration: none;
}

.form-input a:hover{
  text-decoration: underline;
}

form {
  width: 100%;
  align-items: center;
  align-content: center;
  padding: 20px 0;
}
</style>


<script>
export default {

}
</script>
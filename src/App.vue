<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h2 class="fw-bold mb-0">간편로그인</h2>
        </div>

        <div class="modal-body p-5 pt-0 pb-0"></div>
        <div class="mx-5">
          <div class="img-container">
            <img
              src="./assets/kakao_login_large_narrow.png"
              @click="loginWithKakao"
            />
            <img src="./assets/btn_google_signin_dark_normal_web@2x.png" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <img class="nav-logo" src="./assets/Nav-logo.png" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">리스트</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">쪽지</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="margin-left: 10px"
          >
            로그인
          </button>
        </div>
      </div>
    </nav>

    <nav class="navbar bg-f0 rounded">
      <div class="container-fluid">
        <span></span>
        <span>
          <button
            class="btn btn-light mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseCheck"
            aria-expanded="false"
            aria-controls="collapseCheck"
          >
            필터
          </button>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseInsta"
            aria-expanded="false"
            aria-controls="collapseInsta"
          >
            더보기
          </button>
        </span>
      </div>
    </nav>

    <div class="collapse text-start" id="collapseCheck">
      <div class="form-check" v-for="a in 6" :key="a">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
    </div>
    <!-- 카드 -->
    <div class="row gx-2">
      <div class="col-sm-4 p-1" v-for="a in 3" :key="a">
        <div class="card">
          <p class="card-text insta-container">
            <img src="./assets/insta_sample_thumbnail.jpg" />
          </p>
        </div>
      </div>
    </div>
    <div class="collapse" id="collapseInsta">
      <div class="row gx-2">
        <div class="col-sm-4 p-1" v-for="a in 9" :key="a">
          <div class="card">
            <p class="card-text insta-container">
              <img src="./assets/insta_sample_thumbnail.jpg" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 카드 -->

    <!-- 테이블 -->
    <table class="table table-hover table-bordered m-auto shadow">
      <thead>
        <tr class="bg-f0">
          <th scope="col">제목</th>
          <th scope="col">주최기관</th>
          <th scope="col">내용</th>
          <th scope="col">신청시작일</th>
          <th scope="col">마감일</th>
          <th scope="col">활동시작일</th>
          <th scope="col">활동마감일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in 13" :key="a">
          <th scope="row">Dummy</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    async loginWithKakao() {
      if (!(await this.isKakaoInitialized())) {
        // SDK 로드
        window.Kakao.init("3b666133f33102bfed3844b9623b5028");
      }
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080/",
      });
    },
    isKakaoInitialized() {
      return new Promise((resolve) => {
        if (window.Kakao.isInitialized()) {
          resolve(true);
        } else {
          window.kakaoAsyncInit = () => {
            window.Kakao.isInitialized() ? resolve(true) : resolve(false);
          };
        }
      });
    },
  },
  mounted() {
    // SDK 로드
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      window.Kakao.init("3b666133f33102bfed3844b9623b5028");
      window.kakaoAsyncInit && window.kakaoAsyncInit();
    };
    document.head.appendChild(script);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");

#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mw-90 {
  max-width: 90%;
}
.bg-f0 {
  background-color: #f0f0f0;
}
.img-container {
  object-fit: contain;
}
.insta-container {
  object-fit: contain;
}
.insta-container > img {
  width: 100%;
  height: 100%;
}

.nav-logo {
  height: 50px;
  object-fit: cover;
}
</style>

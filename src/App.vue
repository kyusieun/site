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
          <h2 class="fw-bold mb-0">로그인</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body p-5 pt-0 pb-0">
          <form class="">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control rounded-4"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">ID</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control rounded-4"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">PW</label>
            </div>
            <button
              class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
              type="submit"
            >
              로그인
            </button>
            <hr class="my-4" />
          </form>
        </div>
        <div class="mx-5">
          <h2 class="fs-5 fw-bold mb-3 text-start">간편로그인</h2>
          <div class="img-container">
            <img src="./assets/kakao_login_large_narrow.png" />
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
        <a class="navbar-brand" href="#">모아봤SSU</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
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
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="margin-left: 10px"
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>

    <nav class="navbar bg-f0 rounded">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">필터</span>
      </div>
    </nav>
    <!-- 카드 -->
    <div class="row p-4">
      <div class="col-sm-4" v-for="a in 3" :key="a">
        <div class="card">
          <div class="card-body">
            <p class="card-text insta-container">
              <img src="./assets/insta_sample_thumbnail.jpg" />
            </p>
            <h5 class="card-title">IT대학 학생회 신입부원 모집(키워드)</h5>
          </div>
        </div>
      </div>
    </div>
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>

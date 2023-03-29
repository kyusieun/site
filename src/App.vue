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

  <!-- Navbar -->
  <div class="m-auto" style="max-width: 1000px">
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>

          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="margin-left: 10px"
          >
            로그인
          </button>
        </div>
      </div>
    </nav>

    <nav class="navbar bg-f0">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">필터</span>
      </div>
    </nav>

    <!-- 카드 -->
    <div class="row p-4">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">인기 게시물</h5>
            <p class="card-text">상세내용</p>
            <a href="#" class="btn btn-primary">버튼</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">인기 게시물</h5>
            <p class="card-text">상세내용</p>
            <a href="#" class="btn btn-primary">버튼</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 테이블 -->
  <table class="table table-hover table-bordered m-auto mw-90 shadow">
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
      <tr v-for="a in 20" :key="a">
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
/* .img-container > img {
  width: 350px;
  height: 60px;
} */
</style>

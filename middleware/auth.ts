// 미들웨어는 페이지나 레이아웃이 렌더링 되기 전에 호출하는 커스텀 훅
// 여기서 다루는 미들웨어는 라우트 미들웨어라고 함
export default defineNuxtRouteMiddleware((to, from) => {
    // 임시 로그인 확인 함수 추가
    const isAuthenticated = () => true; // 임시로 true만 반환하도록 함
    if (isAuthenticated() === false) {
        console.log('로그인 안된 사용자');
        return navigateTo('/');
    }
    return true;
});

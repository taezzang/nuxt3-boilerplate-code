// ip 조회 API를 외부 파일로 분리해보자
export default defineEventHandler((event) => ({
    api: 'work',
}));

// export default async () => {
//     const data = await fetch('https://api.ipify.org/?format=json');
//     return JSON.stringify(data);
// };

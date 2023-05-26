const username = "gharynsl123"; // Ganti dengan nama pengguna GitHub Anda
const token = "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"; // Ganti dengan Personal Access Token GitHub Anda

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then((response) => response.json())
.then((data) => {
  const totalRepos = data.public_repos; // Ambil jumlah total repositori dari data
  const totalFollowers = data.followers; // Ambil jumlah total followers dari data

  const totalReposElement = document.getElementById("total-repos"); // Ganti dengan ID elemen tempat Anda ingin menampilkan total repositori
  const totalFollowElement = document.getElementById("total-follow"); // Ganti dengan ID elemen tempat Anda ingin menampilkan total follower
  totalReposElement.textContent = totalRepos; // Tampilkan jumlah total repositori
  totalFollowElement.textContent = totalFollowers; // Tampilkan jumlah total repositori

  // Anda juga dapat menggunakan jumlah total repositori ini untuk tujuan lain, seperti menampilkan di bagian judul portofolio web atau melakukan operasi matematika lainnya.
})
  .catch((error) => {
    console.log("Error:", error);
  });

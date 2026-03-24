const AppData = {
  users: [
    { id: 1, name: 'Admin User', email: 'admin@gallerycafe.com', role: 'admin', password: 'password123' },
    { id: 2, name: 'Staff User', email: 'staff@gallerycafe.com', role: 'staff', password: 'password123' },
    { id: 3, name: 'John Doe', email: 'john@example.com', role: 'customer', password: 'password123' }
  ],
  menu: [
    { id: 1, name: 'Signature Truffle Pasta', category: 'mains', price: 24.99, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=400', desc: 'Handmade pasta tossed with wild mushrooms and truffle oil.' },
    { id: 2, name: 'Wagyu Beef Burger', category: 'mains', price: 28.50, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400', desc: 'Premium Wagyu beef, aged cheddar, brioche bun, house fries.' },
    { id: 3, name: 'Avocado Tartare', category: 'starters', price: 14.00, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400', desc: 'Fresh avocado with citrus soy dressing and microgreens.' },
    { id: 4, name: 'Lava Cake', category: 'desserts', price: 12.00, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=400', desc: 'Warm chocolate lava cake with vanilla bean ice cream.' },
    { id: 5, name: 'Espresso Martini', category: 'drinks', price: 16.00, image: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?auto=format&fit=crop&q=80&w=400', desc: 'Vodka, fresh espresso, coffee liqueur.' }
  ],
  reservations: [
    { id: 101, userId: 3, name: 'John Doe', date: '2026-03-22', time: '19:00', guests: 2, status: 'confirmed' }
  ],
  orders: [
    { id: 201, userId: 3, items: [{ menuId: 1, qty: 2 }], total: 49.98, status: 'preparing', date: '2026-03-20T18:30:00Z' }
  ],
  currentUser: null
};

// Initialize app storage if not present
function initStorage() {
  if (!localStorage.getItem('gc_data')) {
    localStorage.setItem('gc_data', JSON.stringify(AppData));
  }
}

function getData() {
  return JSON.parse(localStorage.getItem('gc_data'));
}

function updateData(newData) {
  localStorage.setItem('gc_data', JSON.stringify(newData));
}

function login(email, password) {
  const data = getData();
  const user = data.users.find(u => u.email === email && u.password === password);
  if (user) {
    data.currentUser = user;
    updateData(data);
    return user;
  }
  return null;
}

function logout() {
  const data = getData();
  data.currentUser = null;
  updateData(data);
  window.location.href = 'index.html';
}

function checkAuth() {
  const data = getData();
  return data.currentUser;
}

// Generate UI for common navbar depending on auth status
function renderNavbar() {
  const nav = document.getElementById('navbar-links');
  if(!nav) return;
  
  const user = checkAuth();
  let html = `
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="reservation.html">Reservations</a></li>
  `;
  
  if (user) {
    if(user.role === 'admin' || user.role === 'staff') {
      html += `<li><a href="admin.html">Dashboard</a></li>`;
    }
    html += `<li><a href="#" onclick="logout()" class="btn btn-outline" style="margin-left:1rem;">Logout (${user.name})</a></li>`;
  } else {
    html += `<li><a href="login.html" class="btn btn-primary" style="margin-left:1rem;">Login / Register</a></li>`;
  }
  nav.innerHTML = html;
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  renderNavbar();
});

-- Profiles table
create table profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  role text check (role in ('member','staff','admin')),
  membership_tier text,
  joined_at timestamp default now(),
  primary key (id)
);

-- Resources (rooms/equipment)
create table resources (
  id serial primary key,
  name text,
  type text check (type in ('room','equipment')),
  capacity int,
  description text
);

-- Bookings
create table bookings (
  id serial primary key,
  resource_id int references resources(id),
  member_id uuid references profiles(id),
  start_time timestamp,
  end_time timestamp,
  status text check (status in ('pending','approved','rejected','cancelled')),
  created_at timestamp default now()
);

-- Donations
create table donations (
  id serial primary key,
  donor_id uuid references profiles(id),
  amount numeric,
  campaign text,
  created_at timestamp default now()
);

-- Campaigns
create table campaigns (
  id serial primary key,
  title text,
  goal_amount numeric,
  current_amount numeric default 0,
  active boolean default true
);

-- Notifications
create table notifications (
  id serial primary key,
  user_id uuid references profiles(id),
  message text,
  read boolean default false,
  created_at timestamp default now()
);

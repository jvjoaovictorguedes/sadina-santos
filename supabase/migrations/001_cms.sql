create extension if not exists pgcrypto;

create table if not exists public.site_settings (
  id boolean primary key default true check (id),
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  nome text not null,
  resumo text not null default '',
  descricao text not null default '',
  destaques jsonb not null default '[]'::jsonb,
  icone text not null default 'tesoura',
  ativo boolean not null default true,
  ordem integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.portfolio (
  id uuid primary key default gen_random_uuid(),
  categoria text not null,
  titulo text not null,
  imagem text not null,
  before_image text,
  after_image text,
  ativo boolean not null default true,
  ordem integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  servico text not null default '',
  texto text not null,
  ativo boolean not null default true,
  ordem integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;
alter table public.services enable row level security;
alter table public.portfolio enable row level security;
alter table public.testimonials enable row level security;

drop policy if exists "public can read site settings" on public.site_settings;
create policy "public can read site settings" on public.site_settings for select using (true);
drop policy if exists "admins can change site settings" on public.site_settings;
create policy "admins can change site settings" on public.site_settings for all to authenticated using (true) with check (true);

drop policy if exists "public can read active services" on public.services;
create policy "public can read active services" on public.services for select using (ativo = true or auth.role() = 'authenticated');
drop policy if exists "admins can manage services" on public.services;
create policy "admins can manage services" on public.services for all to authenticated using (true) with check (true);

drop policy if exists "public can read active portfolio" on public.portfolio;
create policy "public can read active portfolio" on public.portfolio for select using (ativo = true or auth.role() = 'authenticated');
drop policy if exists "admins can manage portfolio" on public.portfolio;
create policy "admins can manage portfolio" on public.portfolio for all to authenticated using (true) with check (true);

drop policy if exists "public can read active testimonials" on public.testimonials;
create policy "public can read active testimonials" on public.testimonials for select using (ativo = true or auth.role() = 'authenticated');
drop policy if exists "admins can manage testimonials" on public.testimonials;
create policy "admins can manage testimonials" on public.testimonials for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site-images', 'site-images', true, 52428800, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

insert into public.site_settings (id, data) values (true, '{"name":"Sadina Santos","tagline":"Mega Hair","title":"Sadina Santos — Cortes, Química e Mega Hair","description":"Estúdio de beleza especializado em corte, escova, química, penteados e mega hair, com atendimento personalizado e acabamento de salão fino.","whatsapp":"5534996545747","whatsappDisplay":"(34) 99654-5747","instagram":"https://instagram.com/sadinasantos","instagramHandle":"@sadinasantos","email":"sadinacristina@gmail.com","city":"Uberlândia, MG","address":"Rua Rio Corumba N° 1100 — Jardim Europa, Uberlândia/MG","heroBadge":"Atendimento com hora marcada","hours":[{"dias":"Segunda a Sábado","horario":"8h às 18h"},{"dias":"Domingo","horario":"Fechado"}]}'::jsonb)
on conflict (id) do nothing;

insert into public.services (slug, nome, resumo, descricao, destaques, icone, ordem) values
('corte', 'Corte', 'Cortes desenhados para o seu rosto e o seu jeito de viver.', 'Do risco à finalização, cada corte é planejado sob medida.', '["Diagnóstico capilar", "Corte a seco ou molhado", "Finalização incluída"]', 'tesoura', 1),
('escova', 'Escova', 'Movimento, brilho e durabilidade para o dia a dia ou ocasiões especiais.', 'Escova modeladora com técnica de secagem que respeita a fibra do fio.', '["Escova lisa ou modelada", "Produtos profissionais", "Proteção térmica"]', 'secador', 2),
('quimica', 'Química em geral', 'Coloração, alisamento e reconstrução com segurança.', 'Processos químicos avaliados individualmente e com protocolo de proteção.', '["Coloração e mechas", "Alisamento e progressiva", "Reconstrução"]', 'flaconete', 3),
('penteados', 'Penteados', 'Penteados para festas, casamentos e ensaios.', 'Penteados construídos fio a fio para cada evento.', '["Prova disponível", "Presos e semipresos", "Atendimento para eventos"]', 'penteado', 4),
('mega-hair', 'Mega Hair', 'Alongamento e volume natural, com aplicação sob medida.', 'Aplicação escolhida conforme a estrutura do seu fio.', '["Fita, tela e queratina", "Fios selecionados", "Manutenção programada"]', 'megahair', 5)
on conflict (slug) do nothing;

insert into public.testimonials (nome, servico, texto, ordem) values
('Camila R.', 'Mega Hair', 'Sempre tive medo de fazer mega hair por já ter feito em outro lugar e não gostado. Na Sadina o resultado ficou tão natural que ninguém percebe que não é meu fio.', 1),
('Juliana P.', 'Penteado para casamento', 'Fiz prova de penteado semanas antes do casamento e no dia foi ainda melhor. Cuidado, pontualidade e um capricho que fez toda a diferença nas fotos.', 2),
('Fernanda A.', 'Química em geral', 'Depois de anos sofrendo com química mal feita em outros salões, encontrei um cuidado de verdade com a saúde do meu cabelo.', 3);

insert into public.portfolio (categoria, titulo, imagem, before_image, after_image, ordem) values
('Mega Hair', 'Mega hair fio a fio, efeito natural', '/gallery/cabelo-2.webp', '/gallery/cabelo-1.webp', '/gallery/cabelo-2.webp', 1),
('Química', 'Coloração e luzes personalizadas', '/gallery/cabelo-23.jpeg', '/gallery/cabelo-21.jpeg', '/gallery/cabelo-23.jpeg', 2),
('Penteado', 'Penteado especial para festa', '/gallery/cabelo-3.webp', '/gallery/cabelo-36.jpeg', '/gallery/cabelo-3.webp', 3),
('Corte', 'Corte com movimento', '/gallery/cabelo-10.jpeg', '/gallery/cabelo-9.jpeg', '/gallery/cabelo-10.jpeg', 4),
('Química', 'Coloração dos fios para transformação do visual', '/gallery/cabelo-17.jpeg', '/gallery/cabelo-13.jpeg', '/gallery/cabelo-17.jpeg', 5),
('Química', 'Transformação com progressiva', '/gallery/cabelo-31.jpeg', '/gallery/cabelo-29.jpeg', '/gallery/cabelo-31.jpeg', 6);

drop policy if exists "public can view site images" on storage.objects;
create policy "public can view site images" on storage.objects for select using (bucket_id = 'site-images');
drop policy if exists "admins can upload site images" on storage.objects;
create policy "admins can upload site images" on storage.objects for insert to authenticated with check (bucket_id = 'site-images');
drop policy if exists "admins can update site images" on storage.objects;
create policy "admins can update site images" on storage.objects for update to authenticated using (bucket_id = 'site-images') with check (bucket_id = 'site-images');
drop policy if exists "admins can delete site images" on storage.objects;
create policy "admins can delete site images" on storage.objects for delete to authenticated using (bucket_id = 'site-images');

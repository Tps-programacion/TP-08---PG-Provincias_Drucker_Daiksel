--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2026-06-01 08:49:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16400)
-- Name: provincias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provincias (
    nombre character varying,
    nombre_completo character varying,
    latitud numeric,
    longitud numeric,
    orden_visualizacion integer,
    id integer NOT NULL
);


ALTER TABLE public.provincias OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16407)
-- Name: provincias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.provincias ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.provincias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4779 (class 0 OID 16400)
-- Dependencies: 215
-- Data for Name: provincias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provincias (nombre, nombre_completo, latitud, longitud, orden_visualizacion, id) FROM stdin;
Buenos Aires	Provincia de Buenos Aires	-36.6769	-60.5588	1	1
Santa Fe	Provincia de Santa Fe	-31.6333	-60.7000	3	3
CÃ³rdoba	Provincia de CÃ³rdoba	-31.4173	-64.1833	2	2
Mendoza	Provincia de Mendoza	-32.8895	-68.8458	4	4
Chaco	Provincia del Chaco	-27.4514	-58.9867	5	5
\.


--
-- TOC entry 4786 (class 0 OID 0)
-- Dependencies: 216
-- Name: provincias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provincias_id_seq', 5, true);


--
-- TOC entry 4635 (class 2606 OID 16414)
-- Name: provincias provincias_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincias
    ADD CONSTRAINT provincias_pk PRIMARY KEY (id);


-- Completed on 2026-06-01 08:49:21

--
-- PostgreSQL database dump complete
--


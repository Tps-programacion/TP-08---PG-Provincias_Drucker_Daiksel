--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2026-06-08 09:36:02

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

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4789 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16416)
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
-- TOC entry 217 (class 1259 OID 16421)
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
-- TOC entry 4782 (class 0 OID 16416)
-- Dependencies: 216
-- Data for Name: provincias; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES ('Buenos Aires', 'Provincia de Buenos Aires', -36.6769, -60.5588, 1, 6);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES ('Santa Fe', 'Provincia de Santa Fe', -31.6333, -60.7000, 3, 7);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES ('Córdoba', 'Provincia de Córdoba', -31.4173, -64.1833, 2, 8);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES ('Mendoza', 'Provincia de Mendoza', -32.8895, -68.8458, 4, 9);
INSERT INTO public.provincias OVERRIDING SYSTEM VALUE VALUES ('Chaco', 'Provincia del Chaco', -27.4514, -58.9867, 5, 10);


--
-- TOC entry 4790 (class 0 OID 0)
-- Dependencies: 217
-- Name: provincias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provincias_id_seq', 11, true);


--
-- TOC entry 4636 (class 2606 OID 16425)
-- Name: provincias provincia_nombre_unico; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincias
    ADD CONSTRAINT provincia_nombre_unico UNIQUE (nombre);


--
-- TOC entry 4638 (class 2606 OID 16423)
-- Name: provincias provincias_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincias
    ADD CONSTRAINT provincias_pk PRIMARY KEY (id);


-- Completed on 2026-06-08 09:36:02

--
-- PostgreSQL database dump complete
--


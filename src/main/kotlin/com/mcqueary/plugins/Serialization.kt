package com.mcqueary.plugins

import com.mcqueary.Sticky
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.plugins.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.*
import kotlinx.serialization.json.*
import java.sql.DriverManager

val HOST = System.getenv("HOST")
val USERNAME = System.getenv("USERNAME")
val PASSWORD = System.getenv("PASSWORD")

fun Application.configureSerialization() {
	install(ContentNegotiation) {
		json()
	}

	routing {
		get("/frontPage") {
			val con = DriverManager.getConnection(HOST, USERNAME, PASSWORD)
			val statement = con.prepareStatement("select * from sticky order by created limit 9")
			val resultSet = statement.executeQuery()

			val stickyList: ArrayList<Sticky> = arrayListOf()
			while (resultSet.next()) {
				stickyList.add(Sticky(
					resultSet.getString("author"),
					resultSet.getString("body"),
					resultSet.getTimestamp("created").time)
				)
			}
			call.respondText(Json.encodeToString(stickyList), ContentType.Application.Json)
		}
	}
}

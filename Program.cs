global using Microsoft.EntityFrameworkCore;
global using ASPdotNETCoreWebAPIUserSignupLoginVerified.Models;
global using ASPdotNETCoreWebAPIUserSignupLoginVerified.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    var allowOrigin = "http://localhost:3000,http://192.168.20.15:3000";
    var allowOriginArray = allowOrigin.Split(',');
    //options.AddPolicy("CORSPolicy",
    //    builder => {
    //        builder.WithOrigins(allowOriginArray).AllowAnyHeader().AllowAnyMethod();
    //    }
    //    );
    options.AddPolicy("CORSPolicy",
    builder => {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    }
    );

});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();




app.UseHttpsRedirection();

app.UseCors("CORSPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();

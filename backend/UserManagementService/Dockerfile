FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["UserManagementService.csproj", "."]
RUN dotnet restore "./UserManagementService.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "UserManagementService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "UserManagementService.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "UserManagementService.dll"]